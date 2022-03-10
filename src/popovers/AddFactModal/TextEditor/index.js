import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const TextEditor = () => {
  
    // modules = {
    //   toolbar: [
    //     [{ 'header': [1, 2, false] }],
    //     ['bold', 'italic', 'underline','strike', 'blockquote'],
    //     [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    //     ['link', 'image'],
    //     ['clean']
    //   ],
    // },
  
    // formats = [
    //   'header',
    //   'bold', 'italic', 'underline', 'strike', 'blockquote',
    //   'list', 'bullet', 'indent',
    //   'link', 'image'
    // ],
    const [value, setValue] = useState('');

    return (
      <ReactQuill className="text-editor" theme="snow" value={value} placeholder={"Спростування"} onChange={setValue}/>
    );

    // return (
    //     <div className="text-editor">
    //         <ReactQuill theme="snow"
    //                     modules={this.modules}
    //                     formats={this.formats}>
    //         </ReactQuill>
    //     </div>
    // );
}
  
