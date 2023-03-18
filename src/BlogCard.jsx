function BlogCard(props){
    return(
        <div>
            <h3>{props.blogTitle}</h3>
            <p>
                {props.blogPreviewText}
            </p>
            <a href={props.link}>Keep reading</a>
        </div>
    )
}
export default BlogCard;