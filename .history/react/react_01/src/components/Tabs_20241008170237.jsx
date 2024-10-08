export default function Tabs({children,buttons,buttonsContainer}){
    const ButtonContainer = buttonsContainer;
    return(
    <>
      <>{buttons}</menu>
      {children}
    </>
    );

}