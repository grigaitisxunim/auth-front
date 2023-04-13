import styled from "styled-components";

export const Wrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    display: grid;
    place-content: center;
    * {
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    color: #ffffff;
  }
    margin-top: 100px;
    `;

export const Container = styled.form`
    background-color: rgb(49,36,80);
    display: flex;
    flex-direction: column;
    gap: 32px;
    min-width: 40vw;
    min-height: 60vh;
    padding: 32px;
    border-radius: 16px;
    input{
        border-radius: 0px;
        background-color: rgb(49,36,80);
        color: #ffffff;
        border-bottom: 0.5px black solid;
        ::placeholder{
            color: #ffffff;
        }
    }
    button {
        width: fit-content;
        align-self: flex-end;
    }
`;
export const Select = styled.select`

`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Option = styled.option`
    border: none;
    max-width: 20vw;
`;

export const Label = styled.label`
    color: #ffffff;
    margin-bottom: 5px;
`;
export const RadioWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const RadioGroup = styled(RadioWrapper)`
    gap: 12px;
`;

export const Submit = styled.button`
    padding: 0px 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #7664a1;
    color: white;
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 13px;
    height: 30px;
`;
export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    min-height: 80px;
    color: black;
    :focus{outline: 0}
    padding: 8px 
`;


