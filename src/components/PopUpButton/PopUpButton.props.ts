type PopUpButtonProps = {
    title: string;
    heading: string;
    copy: string;
  };
  
const usePopUpButtonProps = (props: PopUpButtonProps) => {
    return { ...props };
};
  
export { usePopUpButtonProps };