type HeroProps = {
    SpeechBubble: JSX.Element;
  };
  
const useHeroProps = (props: HeroProps) => {
    return { ...props };
};
  
export { useHeroProps };