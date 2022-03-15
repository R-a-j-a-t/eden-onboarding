import FinishSetup from './FinishSetup';
import HomeSetup from './HomeSetup';
import UserSetup from './UserSetup';
import Welcome from './Welcome';

export default function Content({stageValue=0}) {
    switch(stageValue) {
        case 0:
            return <Welcome />;
        case 1:
            return <HomeSetup />;
        case 2:
            return <UserSetup />;
        case 3:
            return <FinishSetup />;
        default:
            return <></>;
    }
}