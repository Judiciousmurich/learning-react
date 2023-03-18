function TeamMember({firstName, lastName, position}){
    return(
        <div>
            <h3>{firstName} {lastName}</h3>
            <p>{position}</p>
        </div>
    )
}
export default TeamMember;