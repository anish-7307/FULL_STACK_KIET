export default function Footer(op)
{   const c = {name:"KIET", year:2024}
    return(
        <footer>
            <p>{op.year} {op.company}</p>
        </footer>
    )
}