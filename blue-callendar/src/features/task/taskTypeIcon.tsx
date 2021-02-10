import CalendarTask from "./CalendarTask";
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

const getTaskTypeIcon = (task: CalendarTask) => {
    if(task.getStatus() === 'Open') {
        return <AssignmentIcon/>
    } else if(task.getStatus() === 'In Progress') {
        return <AssignmentLateIcon/>
    } else return <AssignmentTurnedInIcon/>
};

export default getTaskTypeIcon;