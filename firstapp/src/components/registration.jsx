export default function registration(){
    return(
        <form action="onsubmit">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
        </form>
    )
}