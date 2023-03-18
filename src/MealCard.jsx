function MealCard(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <p>
                {props.description}
            </p>
            <a href="">${props.price} | order now</a>
            <p>Welcome</p>
        </div>
    )
}
export default MealCard;