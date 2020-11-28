import styles from './timeLine.module.scss';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { InView } from 'react-intersection-observer';
import Zoom from '@material-ui/core/Zoom';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';



const useStyles = makeStyles(
    {
        icon: {
            height: '50px',
            width: '50px',
        },
    }
);




const TimeLine = (props) => {
    const emplois = props.emplois;
    const classes = useStyles();

    const removeBeforeCssClass = input => {
        if (input)
            input.classList.remove("MuiTimelineItem-missingOppositeContent");
    };

    return (
        <Timeline align="left">
            {
                emplois.map(emploi => {
                    return (
                        <TimelineItem key={emploi.employeur} ref={removeBeforeCssClass}>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <WorkIcon fontSize="large" />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <InView threshold={0.75} triggerOnce>
                                {({ inView, ref, entry }) => (
                                    <Zoom in={inView} timeout={900}>
                                        <TimelineContent ref={ref} className={styles.item}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <div className={styles.posteTitle}>
                                                    <h3>{emploi.poste}</h3>
                                                    <h4>{emploi.dateDebut} {emploi.dateFin && '- ' + emploi.dateFin}</h4>
                                                </div>
                                                <h4>{emploi.employeur}</h4>
                                                <ul>
                                                    {
                                                        emploi.description.map((point, index) => {
                                                            return <li key={index}>{point}</li>
                                                        })
                                                    }
                                                </ul>
                                            </Paper>
                                        </TimelineContent>
                                    </Zoom>
                                )}
                            </InView>
                        </TimelineItem>
                    )
                })
            }
            <TimelineItem ref={removeBeforeCssClass}>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <StarIcon fontSize="large" />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
            </TimelineItem>
        </Timeline>
    );
};
export default TimeLine;
