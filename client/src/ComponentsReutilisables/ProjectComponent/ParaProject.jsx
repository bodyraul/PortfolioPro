import tabClassParaProjet from "../../tools/tab/tabProjet/TabClassParaProjet";
import BigImgProjet from "../../Component/projet/BigImgProjet";
import SmallImgProjet from '../../Component/projet/SmallImgProjet';
import TexteProjet from '../../Component/projet/TexteProjet';

export default function ParaProject({nb}) {

    return (
    <div  className={tabClassParaProjet[nb]}>
        <BigImgProjet nb={nb} />
        <SmallImgProjet nb={nb} />
        <TexteProjet nb={nb} />
    </div>
  )
}
