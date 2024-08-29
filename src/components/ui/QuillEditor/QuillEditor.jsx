import useFileApis from '@hooks/apis/useFileApis.mjs';
import { useMemo, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import '@styles/recipe/quillstyle.css';

const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'align', 'color', 'background', 'size', 'h1', 'image', 'video'];

function QuillEditor({ values, setValues }) {
  const quillRef = useRef(null);
  const { postSingleFile } = useFileApis();

  // 에디터에 이미지 첨부 이벤트가 일어나면 서버에 API 요청을 보내 응답값으로 URL을 돌려받고 이미지 태그의 src에 그 URL을 넣어주는 함수
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const file = input.files[0];

      try {
        const fileRes = await postSingleFile(file);
        const imgUrl = `${import.meta.env.VITE_API_SERVER}` + fileRes.data.item[0].path;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', imgUrl);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [[{ align: [] }], ['bold', 'italic', 'underline', 'strike'], [{ list: 'bullet' }], ['link', 'image', 'video'], ['clean']],
        handlers: { image: imageHandler },
      },
    };
  }, []);

  return (
    <>
      <ReactQuill theme="snow" ref={quillRef} modules={modules} formats={formats} onChange={setValues} value={values} placeholder={'레시피를 작성해주세요'} />
    </>
  );
}

export default QuillEditor;
