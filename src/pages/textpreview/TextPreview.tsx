import { useNavigate } from "react-router-dom";
import CustomTextGeneration from "../../components/textgeneration/CustomTextGeneration";
import Button from "../../components/button/Button";
import ButtonContainer from "../../components/button/ButtonContainer";
import "./TextPreview.css";

const TextPreview = () => {
  const navigate = useNavigate();

  // Function to handle "Great! Create my Greeting" button click
  const handleCreateGreeting = () => {
    navigate("/greeting-done");
  };

  // Function to handle "Change" button click
  const handleChange = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between px-4 pt-6 pb-0 ">
      <div className="w-full text-center mb-4 md:mb-6">
        <h1 className="typography-heading">
          This is a text preview of your video greeting
        </h1>
      </div>

      <div className="text-preview-content">
        <CustomTextGeneration />
      </div>

      <ButtonContainer className="text-preview-actions">
        <Button
          text="Great! Create my Greeting"
          onClick={handleCreateGreeting}
          bgColor="#C90082"
          textColor="#FFFFFF"
        />
        <Button
          text="Change"
          onClick={handleChange}
          bgColor="#FFFFFF"
          textColor="#333333"
        />
      </ButtonContainer>
    </div>
  );
};

export default TextPreview;
