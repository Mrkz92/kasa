/* 
Doit afficher une valeur de manière totalement formatée
Doit être moche
La valeur est passée par une prop :
    > JSON.stringify(valeur, null, 2)
    > Dans une balise <pre>
*/
import "./DevDump.scss";

export default function DevDump(valeur) {
  return <pre className="DevDump">{JSON.stringify(valeur, null, 2)}</pre>;
}
