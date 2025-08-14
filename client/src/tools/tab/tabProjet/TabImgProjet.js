import company from "../../../Asset/Img/company.jpg"
import collection  from"../../../Asset/Img/collection.jpg"
import forum  from"../../../Asset/Img/forum.jpg" ;
import github from '../../../Asset/Img/github.png';
import react from '../../../Asset/Img/react.png';
import node from '../../../Asset/Img/node.png';
import tailwind from '../../../Asset/Img/tailwind.png';
import mongodb from '../../../Asset/Img/mongodb.png';
import fm from '../../../Asset/Img/fm.png';

const srcBigImg=[company,collection,forum];
const srcSmallImg=[[github,react,tailwind],[github,react,tailwind,fm],[github,react,tailwind,node,mongodb]];

const tabImgProjet={
    srcBigImg:srcBigImg,
    srcSmallImg:srcSmallImg
}

export default tabImgProjet;

