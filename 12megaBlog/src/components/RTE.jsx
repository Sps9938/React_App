import React from "react";
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from "react-hook-form"

export default function RTE({
    name,
    control,
    label,
    defaultValue =""
}) {
    return (

        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1"> {label} </label>}

        <Controller
        name= {name || "content"}
        control={control}

        render={({field: {onChange}}) => (
            <Editor
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}//TenyMce provides an event handler

            /*

            -> onEditorChange comes from TinyMCE.

            -> onChange comes from react-hook-form.

            -> By setting onEditorChange={onChange}, we connect TinyMCE's updates to react-hook-form.

        ❌ What Happens If We Remove onEditorChange?
            
            * If we do not include onEditorChange={onChange}, the user can still edit the text, but react-hook-form will not capture those changes.

            * This means the submitted data will be empty or incorrect.

            */

            />
    )}
        />
        </div>
    )
}