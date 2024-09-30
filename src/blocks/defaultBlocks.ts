import SpacerBlock from "./SpacerBlock";
import Column from "./columns/column";
import MediaBlock from "./MediaBlock";
import TextBlock from "./TextBlock";
import MenuButtonBlock from "./navigation/MenuButtonBlock";
import HeaderBlock from "./HeaderBlock";
import CompareSliderBlock from "./CompareSliderBlock";
import BreakerBlock from "./BreakerBlock";
import FormBlock from "./FormBlock";

export const defaultBlocks = ()=> [Column([MediaBlock, TextBlock,MenuButtonBlock, HeaderBlock,CompareSliderBlock,SpacerBlock,FormBlock]),BreakerBlock,MediaBlock,MenuButtonBlock,CompareSliderBlock,SpacerBlock,FormBlock]
