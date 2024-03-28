import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
}

const DivContainer = styled.section<IPropsHome>`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  article {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
    gap: 1vh;
    border-radius: 1rem;
    padding: 2vh 4vh;
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section > p {
    align-self: center;
    text-align: center;
    margin: 5vh 0 2vh 0;
    line-height: 3.5vh;
    font-size: 1.2rem !important;
    @media screen and (max-width: 550px) {
      font-size: 1rem !important;
    }
  }

  section > div {
    width: 100%;
    display: flex;
    /* background-color: red; */
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    gap: 1rem;
  }

  section > div > h1 {
    font-size: 3.4rem;
    font-weight: bold;
    margin-bottom: 0.5vh;
  }

  section > div > svg {
    width: 2.4rem;
    height: 2.4rem;
    transform: translateY(0.5rem);
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* margin-top: 1rem; */
  }

  /* input styles */
  .input-container {
    position: relative;
    margin: 2vh auto;
    width: 100%;

    label {
      font-size: 0.8rem !important;
      @media screen and (max-width: 1070px) {
        font-size: 0.87rem !important;
      }
      @media screen and (max-width: 550px) {
        font-size: 0.85rem !important;
      }
    }
  }

  .input-container input[type='text'],
  .input-container input[type='email'],
  .input-container textarea {
    font-size: 0.9rem;
    color: ${props => props.theme.colors?.text};
    width: 100%;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 0.5vh 0;
    background-color: transparent;
    outline: none;
  }

  .input-container .label {
    position: absolute;
    top: 0;
    left: 0;
    color: ${props => ` ${props.theme.colors?.text}`};

    transition: all 0.3s ease;
    pointer-events: none;
  }

  .label > span {
    color: ${props => ` ${props.theme.colors?.text}`};

    transform: translateY(0.1rem);
  }

  .input-container input[type='text']:focus ~ .label > span,
  .input-container input[type='email']:focus ~ .label > span,
  .input-container input[type='text']:valid ~ .label > span,
  .input-container input[type='email']:valid ~ .label > span {
    color: #2972dd;
  }

  .input-container textarea .label {
    color: #ccc;
  }

  .input-container input[type='text']:focus ~ .label,
  .input-container input[type='email']:focus ~ .label,
  .input-container textarea:focus ~ .label,
  .input-container textarea:valid ~ .label,
  .input-container input[type='text']:valid ~ .label,
  .input-container input[type='email']:valid ~ .label {
    top: -20px;
    /* font-size: 16px; */
    color: #2972dd;
  }

  .input-container .underline {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #2972dd;
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  .input-container textarea ~ .underline {
    bottom: 3px;
  }

  .input-container input[type='text']:focus ~ .underline,
  .input-container input[type='email']:focus ~ .underline,
  .input-container textarea:focus ~ .underline,
  .input-container textarea:valid ~ .underline,
  .input-container input[type='text']:valid ~ .underline,
  .input-container input[type='email']:valid ~ .underline {
    transform: scaleX(1);
  }
  /*  */

  .input-textarea {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1vh 0;
    gap: 0.5rem;
  }

  .sendButton {
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 20px;
    background-color: #2972dd;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    /* margin-top: 1rem; */
  }
  .sendButton:hover {
    background-color: #114799;
    transition: all 0.3s ease-in-out;
  }

  cite {
    color: #727272;
    font-size: 0.8rem;
    /* margin-top: -1rem; */
    margin-bottom: 1rem;
  }

  .social-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 1rem;
    margin-top: 5vh;
  }

  .social-links::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #d1d1d1;
    /* margin-bottom:; */
  }

  .social-links > h2 {
    font-size: 1rem;
    font-weight: normal;
  }

  .social-links-icons {
    /* width: 0.5rem; */
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center !important;
    gap: 2rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  .social-links-icons > a {
    cursor: pointer;
  }

  @media screen and (max-width: 1290px) {
  }
`

export default DivContainer
