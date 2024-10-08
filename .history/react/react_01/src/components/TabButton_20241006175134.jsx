export default function TabButton({children, isSelected, ...props}) {
    return(
        <li>
            <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
        </li>
    );

}