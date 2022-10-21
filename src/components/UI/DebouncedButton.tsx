interface DebouncedButtonProps {
  children: string;
  clickHandler?: (arg?:any) => void;
}

export const DebouncedButton = (props: DebouncedButtonProps) => {

  const clickHandler = () => {
      if (props.clickHandler) props.clickHandler();
  };

  return (
    <button onClick={props.clickHandler ? clickHandler : undefined}>
      {props.children}
    </button>
  );
};
