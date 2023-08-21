/* 
Doit afficher une valeur de manière totalement formatée
Doit être moche
La valeur est passée par une prop :
    > JSON.stringify(valeur, null, 2)
    > Dans une balise <pre>
*/

export default function DevDump(valeur) {
  const uglyStyle = {
    backgroundColor: "yellow",
    padding: "10px",
    border: "1px solid red",
    borderRadius: "5px",
    fontFamily: "monospace",
    fontSize: "14px",
    fontWeight: "bold",
    color: "purple",
    boxSizing: "border-box",
  };

  return <pre style={uglyStyle}>{JSON.stringify(valeur, null, 2)}</pre>;
}
