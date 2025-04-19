import NumberInput from "../../components/input/NumberInput"; // Adjust path
import EmailInput from "../../components/input/TextInput"; // Adjust path
import Button from "../../components/button/Button"; // Adjust path
import mashaImage from "../../assets/images/signup img.png"; // Ensure image exists

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-10 py-10">
      {/* Top Heading */}
      <h1 className="mb-8 text-center text-gray-800 text-[25px] font-semibold font-montserrat leading-[100%]">
        Sign Up
      </h1>

      {/* Inputs */}
      <div className="w-full max-w-sm space-y-4">
        <NumberInput />
        <EmailInput type="email" placeholder="Email" label="Email" />
      </div>

      {/* Masha Image */}
      <div className="mt-10 sm:mt-12 md:mt-14">
        <img
          src={mashaImage}
          alt="Masha"
          className="w-[160px] sm:w-[180px] h-[160px] sm:h-[180px] object-contain"
        />
      </div>

      {/* Below Image Heading */}
      <h2 className="mt-6 text-center text-gray-800 text-[20px] sm:text-[22px] md:text-[25px] font-semibold font-montserrat leading-[100%] px-2 sm:px-6">
        The video greeting will be sent to this contact
      </h2>

      {/* Continue Button */}
      <div className="mt-10 w-full max-w-sm">
        <Button
          text="Next"
          onClick={() => console.log("Continue clicked")}
          bgColor="#C90082"
          textColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default SignUp;
