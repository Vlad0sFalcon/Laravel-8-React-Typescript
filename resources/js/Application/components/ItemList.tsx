import React from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import KitchenIcon from '@material-ui/icons/Kitchen';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import PanToolIcon from '@material-ui/icons/PanTool';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ItemList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Кухня" icon={<KitchenIcon />} {...a11yProps(0)} />
          <Tab label="Гостинная" icon={<MenuBookIcon />} {...a11yProps(1)} />
          <Tab label="Ванная комната" icon={<LocalLaundryServiceIcon />} {...a11yProps(2)} />
          <Tab label="Спальня" icon={<NightsStayIcon />} {...a11yProps(3)} />
          <Tab label="Коридор" icon={<PanToolIcon />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Кухня
      </TabPanel>
      <TabPanel value={value} index={1}>
        Зал
      </TabPanel>
      <TabPanel value={value} index={2}>
        Ванная комната
      </TabPanel>
      <TabPanel value={value} index={3}>
        Спальня
      </TabPanel>
      <TabPanel value={value} index={4}>
        Коридор
      </TabPanel>
    </div>
  );
}
