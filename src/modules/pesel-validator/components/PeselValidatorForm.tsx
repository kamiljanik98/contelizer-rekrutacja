import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import Button from "../../../components/Button";
import InputText from "../../../components/InputText";
import PeselValidatorHeader from "./PeselValidatorHeader";
import PeselValidatorResult from "./PeselValidatorResult";
import { validatePesel } from "../../../utils/validatePesel";

const PeselValidatorForm = () => {
  const [pesel, setPesel] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleValidate = () => setIsValid(validatePesel(pesel));

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <PeselValidatorHeader />

      <div className="flex w-full items-center gap-4">
        <InputText
          value={pesel}
          onChange={(e) => setPesel(e.target.value)}
          maxLength={11}
          placeholder="np. 9821372136"
        />
        <Button
          onClick={handleValidate}
          className="rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <SendHorizontal size={18} />
        </Button>
      </div>

      <PeselValidatorResult isValid={isValid} />
    </div>
  );
};

export default PeselValidatorForm;
