import { useMemo } from "react";
const InputLenghtCalc = ({ posts}) => {

    const totalLength = useMemo(() => posts.reduce((total, post) => total + post.title.length, 0), [posts]);
    return ( 
        <div className="lengthdiv">
            <h4>Posts Titles length is - {totalLength}</h4>
        </div>
     );
}
 
export default InputLenghtCalc;