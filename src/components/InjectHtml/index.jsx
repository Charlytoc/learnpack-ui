import { useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'


import useStore from '../../store';

export const DivHTML = styled.div`
h1, h2, h3 {
  margin-top: 0;
  padding-top: 0;
  line-height: 1.2;
}
h1 {
  font-weight: 700;
  font-size: 23px !important;
  line-height: 50px;
  color: ${props => props.theme.colors.primary};
  display: inline-flex;
  gap: 10px;
  margin: 0px;
  code {
    font-size: 23px !important;
  }
}
h2 {
  font-weight: 800;
  font-size: 20px !important;;
  line-height: 54px;
  color: ${props => props.theme.colors.primary};
  display: inline-flex;
  gap: 10px;
  margin: 0px;
}
code{
  padding: 8px 12px;
  margin-bottom: 6px;
  overflow: auto;
  letter-spacing: 0.05em;
  line-height: 20px;
  word-wrap: break-word;
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
  color: ${props => props.theme.colors.white};
  font-size: 12px !important;;
  background-color: ${props => props.theme.colors.bgCode};
  border-left: 0.25em solid #0097cd;
  // display: block;
}
ul, li, ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 34px;
}
`;

const InjectHtml = () => {
  const state = useStore();
  const { contentSelected } = state;

  const [lesson, setLesson] = useState("");

  const main = async (content) => {

    const file = await unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(content)

    setLesson(String(file))
    return String(file)
  }


  useEffect(() => {
    main(contentSelected.body);

  }, [contentSelected]);

  return (
    <>
      {
        // TODO: Buscar una alternativa mas segura para inyectar el HTML al div 
      }
      <DivHTML
        dangerouslySetInnerHTML={{ __html: lesson }}
      />
    </>
  );
}



export default memo(InjectHtml)