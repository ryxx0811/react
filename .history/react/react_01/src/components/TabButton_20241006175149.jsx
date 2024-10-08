export default function TabButton({children, isSelected, ...props}) {
    return(
        <li>
            <button className={isSelected ? 'active': undefined} {}>{children}</button>
        </li>
    );

}