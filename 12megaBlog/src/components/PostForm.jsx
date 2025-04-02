import React ,{useEffect} from "react";
import {useForm} from 'react-hook-form'

import {Button, Input, Select, RTE} from '../index'

import appwriteService from "../../appwrite/config";

import { useNavigate } from "react-router-dom";

import { useSelector } from  'react-redux'

export default function PostForm( { post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            //if we have used mongoDb then you wrtie {
           //slug: post?._id 
            // }
            content: post?.content || "",
            status: post?.status || "active",
        },
    });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if(post) {

            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null

            if(file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : undefined,
            });
            
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            } 
        }
        else{
            const file = await appwriteService.uploadFile(data.image[0])

            if(file){
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({...data, userId: userData.$id});

                if(dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransForm = useCallback((value) => {
        if(value && typeof value === "string")
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

            return "";
        /*

        Q> What It Does:

        -> trim() – Removes extra spaces from the start and end of the title.

        -> toLowerCase() – Converts all characters to lowercase for consistency.

        -> replace(/[^a-zA-Z\d\s]+/g, "-") – Replaces any non-alphanumeric characters (except spaces) with "-".

        -> replace(/\s/g, "-") – Replaces all spaces with "-" to make it URL-friendly.


        Example Transformations:

        Title Input	        Slug Output

        "Hello World!"	    "hello-world"
        "React & Next.js"	 "react-next-js"
        " My First Post "	"my-first-post"
        
        Q> Why Do We Need This?

        1. SEO & URL-Friendly: Slugs are commonly used in URLs (example.com/blog/hello-world instead of example.com/blog/123).

        2. Consistency: Ensures all slugs follow the same pattern.

        3. Auto-Generation: Users don't need to manually enter a slug; it's created automatically from the title.


        */

    },[])


    useEffect(() => {
        const subScription = watch((value, { name }) => {
            if(name === "title") {
                setValue("slug", slugTransForm(value.title), { shouldValidate: true})
            }
        });
        /*
    Q> What Does It Do?

        -> watch() – This is a function from        react-hook-form that listens to form field changes.

        -> if (name === "title") – Checks if the changed field is "title".

        -> slugTransForm(value.title) – Converts the title into a slug using the slugTransForm function.

        -> setValue("slug", ...) – Updates the slug field dynamically based on the title input.

        -> Cleanup (unsubscribe()) – Unsubscribes from watch() when the component unmounts to prevent memory leaks.

    Q> Why Do We Need This?

        -> Automatic Slug Generation: As the user types a title, the slug field updates in real time.

        -> Keeps UI in Sync: Ensures the slug field stays updated without needing extra user input.

        -> Memory Management: Prevents unnecessary re-renders and memory leaks by unsubscribing when the component unmounts.


        Example Flow
        
        1. User types: "Hello World"

        2. watch() detects the change in the title field.

        3. slugTransForm("Hello World") converts it to "hello-world".

        4. setValue("slug", "hello-world") updates the slug field in the form.

        5. If the component unmounts, unsubscribe() ensures watch() stops listening.

        */
        return () => subScription.unsubscribe()
    },[watch, slugTransForm, setValue]);


    return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>
            )}
            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
    );

}