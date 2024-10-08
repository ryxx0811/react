export default function Tabs({children,buttons,buttonsContainer}){
    const ButtonContainer = buttonsContainer;
    return(
    <>
      <menu>{buttons}</menu>
      {children}
    </>
    );

}