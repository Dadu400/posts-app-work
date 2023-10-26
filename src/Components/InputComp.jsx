import { useCallback } from "react";
const Input = ({onNewPostAdded}) => {

    const onNewPostEntered = useCallback((e) => {
        if (e.key === "Enter" && e.target.value !== "") {
            const post = {
                title: e.target.value,
            };
            e.target.value = "";
            onNewPostAdded(post)
        }
    }, [])
    
    return ( 
        <input 
        type="text" 
        placeholder="New post"
        onKeyDown={onNewPostEntered}/>
     );
}
 
export default Input;
