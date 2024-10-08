export default function Tabs({children,buttons,buttonsContainer}){
    const ButtonContainer = buttonsContainer;
    return(
    <>
      <B>{buttons}</menu>
      {children}
    </>
    );

}