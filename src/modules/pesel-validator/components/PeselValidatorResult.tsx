type Props = {
  isValid: boolean | null;
};

const PeselValidatorResult = ({ isValid }: Props) => {
  if (isValid === null) return null;

  const text = isValid
    ? "PESEL jest poprawny"
    : "Błąd: Nieprawidłowy numer PESEL";

  const color = isValid
    ? "text-green-600 dark:text-green-400"
    : "text-red-600 dark:text-red-400";

  return <p className={`mt-4 text-sm font-semibold ${color}`}>{text}</p>;
};

export default PeselValidatorResult;
