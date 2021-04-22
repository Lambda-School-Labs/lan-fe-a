import styled from 'styled-components';

const OnboardingContainer = styled.div`
  padding: 10%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

.title{
  text-align: center;
  margin-top: 15%;
}
  h1{
    margin-bottom: 4px;
    font-size: 1.75rem;
    font-weight: 700;
    color: #0e1111;
  }

  .instructions {
    margin-bottom: 16px;
    font-size: 1rem;
    font-weight: 500;
    color: 	#0e1111;
    text-align: center;
  }

  .tracks {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 5%;
  }

    .track {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 10px 24px;
      width: 100px;
      border: solid 1px #0099ff;
      border-radius: 3px;
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      transition: 0.25s;
      outline: none;
    }

    .track:nth-child(1) {
      background: ${(props) => (props.tracks[0].value ? '#0099ff' : 'none')};
      color: ${(props) => (props.tracks[0].value ? '#ffffff' : '#0099ff')};

      :hover {
        background-color: #0099ff;
        color: #ffffff;
      }

      :active {
        opacity: 0.5;
      }
    }

    .track:nth-child(2) {
      background: ${(props) => (props.tracks[1].value ? '#0099ff' : 'none')};
      color: ${(props) => (props.tracks[1].value ? '#ffffff' : '#0099ff')};

      :hover {
        background-color: #0099ff;
        color: #ffffff;
      }

      :active {
        opacity: 0.5;
      }
    }

    .track:nth-child(3) {
      background: ${(props) => (props.tracks[2].value ? '#0099ff' : 'none')};
      color: ${(props) => (props.tracks[2].value ? '#ffffff' : '#0099ff')};

      :hover {
        background-color: #0099ff;
        color: #ffffff;
      }

      :active {
        opacity: 0.5;
      }
    }

    .track:nth-child(4) {
      background: ${(props) => (props.tracks[3].value ? '#0099ff' : 'none')};
      color: ${(props) => (props.tracks[3].value ? '#ffffff' : '#0099ff')};

      :hover {
        background-color: #0099ff;
        color: #ffffff;
      }

      :active {
        opacity: 0.5;
      }
    }

    .track:nth-child(5) {
      background: ${(props) => (props.tracks[4].value ? '#0099ff' : 'none')};
      color: ${(props) => (props.tracks[4].value ? '#ffffff' : '#0099ff')};

      :hover {
        background-color: #0099ff;
        color: #ffffff;
      }

      :active {
        opacity: 0.5;
      }
    }

    .track:nth-child(6) {
      background: ${(props) => (props.tracks[5].value ? '#0099ff' : 'none')};
      color: ${(props) => (props.tracks[5].value ? '#ffffff' : '#0099ff')};

      :hover {
        background-color: #0099ff;
        color: #ffffff;
      }

      :active {
        opacity: 0.5;
      }
    }
  

  .continue {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    .error {
      font-size: 0.875rem;
      font-weight: 600;
      color: #ea4335;
    }

    button {
      padding: 15px 30px;
      width: 50%;
      background: linear-gradient(to right, #0084ff, #0099ff);
      border: none;
      border-radius: 3px;
      font-family: 'Nunito', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #ffffff;
      cursor: pointer;
      transition: 0.25s;

      i {
        margin-left: 4px;
        font-size: 0.75rem;
      }

      :hover {
        opacity: 0.5;
      }
    }
  }
  
  .gitHubUserName{
    border-radius: 3px;
    border-color: #0099ff;
    width: 100%;
  }
  

  .github{
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-bottom: 10%;
  }

  @media (min-width: 375px) {
    height: 90vh;
  }

  @media (min-width: 768px) {
    width: 691.2px;
  }
`;

export default OnboardingContainer;