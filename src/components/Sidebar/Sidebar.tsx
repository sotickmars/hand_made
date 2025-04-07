import React from 'react';
import * as S from './styled';
import { RouterPath } from '../../enums/routers';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

type Sidebar = {
  isOpen: boolean;
  onClose: () => void;
};

const NavLinksData = [
  {
    url: RouterPath.Root,
    title: 'Dashboard',
    icon: <DashboardIcon color="inherit" />,
  },
  {
    url: RouterPath.CounterRTK,
    title: 'Store',
    icon: <ReportGmailerrorredIcon color="inherit" />,
  },
  {
    url: RouterPath.Settings,
    title: 'Settings',
    icon: <SettingsApplicationsIcon color="inherit" />,
  },
];

export const Sidebar: React.FC<Sidebar> = ({ isOpen }) => {
  return (
    <S.Drawer variant="persistent" anchor="left" open={true} $isOpen={isOpen}>
      <S.List>
        {NavLinksData.map(({ url, title, icon }) => (
          <ListItem key={url} disablePadding>
            <S.NavLink to={url}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </S.NavLink>
          </ListItem>
        ))}
      </S.List>
    </S.Drawer>
  );
};
