function Student(){
    const Students=["Anu", "Shubha", "Shiva"];

    return (
        <div>
            {Students.map((Student,index)=>(
                <h2 key={index}>{Student}</h2>
            ))}
        </div>
    );
}
export default Student;