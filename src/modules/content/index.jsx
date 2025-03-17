import React, { useReducer } from "react";
import axios from "axios";
import "./content.scss";

const ACTIONS = {
  UPLOAD: "UPLOAD",
  PREDICT: "PREDICT",
  SET_TAMPERED: "SET_TAMPERED",
};

function reducer(prevState, action) {
  switch (action.type) {
    case ACTIONS.UPLOAD:
      return {
        ...prevState,
        imagePath: action.payload.imagePath,
        file: action.payload.file,
        tampered: false,
      };
    case ACTIONS.PREDICT:
      return {
        ...prevState,
      };
    case ACTIONS.SET_TAMPERED:
      return {
        ...prevState,
        tampered: true
      };
    default:
      return prevState;
  }
}

function initializeState() {
  return {
    imagePath: "/Fakect.png",
    file: null,
    tampered: false,
  };
}

const essayOne =
  "Using Convolutional Neural Networks (CNNs) and Error Level Analysis, our model identifies tampered images at 93% accuracy, 91% precision, and 91% recall. This effort aims to strengthen fact-checking workflows and equip fact-checking organizations, social media platforms, and watchdog groups with a scalable tool to combat visual disinformation, which can be useful during this election season.Using Convolutional Neural Networks (CNNs) and Error Level Analysis, our model identifies tampered images at 93% accuracy, 91% precision, and 91% recall. This effort aims to strengthen fact-checking workflows and equip fact-checking organizations, social media platforms, and watchdog groups with a scalable tool to combat visual disinformation, which can be useful during this election season.";

const Content = (props) => {
  const { onEvaluate } = props;
  const [state, dispatch] = useReducer(reducer, initializeState());

  const handleFileUpload = async (event) => {
    onEvaluate('ONGOING TRIAL');
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      dispatch({
        type: ACTIONS.UPLOAD,
        payload: {
          imagePath: imageURL,
          file: file,
        },
      });
    }
  };
  const handlePredict = async () => {
    const formData = new FormData();
    formData.append("file", state.file);

    try {
      await axios.post("https://tampered-images-bcknd-81ebedbb5827.herokuapp.com/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res => {
        console.log(res.data);
        if (res.data.score>50) {
          dispatch({ type: ACTIONS.SET_TAMPERED });
        }
        onEvaluate(`${res.data.score}% chance of tampering`);
      });

    } catch (error) {
      console.error(error);
      alert("Kindly upload an images first");
    }
  }

  return (
    <div className="content-container">
      <div className="content-essay">
        <span>{essayOne}</span>
      </div>
      <div className="content-img">
        <img className="uploaded" src={state.imagePath} alt="uploaded-img" />
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        {state.tampered && <img className="stamp" src={"/fake-stamp.png"} alt="fake-stamp" />}
        <div className='controls'>
          <button onClick={() => document.getElementById("file-upload").click()}>
            Upload
          </button>
          <button onClick={() => handlePredict()}>
            Predict
          </button>
        </div>
      </div>
      <div className="content-essay">
        <span>{essayOne}</span>
      </div>
    </div>
  );
};

export default Content;
