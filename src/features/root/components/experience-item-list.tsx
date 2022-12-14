import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import OpenIcon from '@mui/icons-material/Launch';
import React, { useCallback } from 'react';

import { Icons } from '@/shared';
import { ExperienceItem, I18Data, ListItem as ListItemType } from '@/types';
import { useAppTheme, useAppTranslations, useData } from '@/hooks';
import ExperienceSubItemList from '@/features/root/components/experience-subitem-list';
import Grid from '@mui/material/Grid';

type Props = {
  list: ExperienceItem['list'];
};

const ExperienceItemList: React.FC<Props> = ({ list }) => {
  const { t } = useAppTranslations();
  const { parseI18Data } = useData();
  const { getSxColor } = useAppTheme();

  const parsedTitle = useCallback(
    (item: ListItemType) => (typeof item.title === 'string' ? item.title : parseI18Data(item.title as I18Data)),
    [parseI18Data]
  );

  return list?.length > 0 ? (
    <List disablePadding>
      {list.map((item, index) => (
        <React.Fragment key={parseI18Data(item.text)}>
          <ListItem sx={{ p: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Grid container wrap="nowrap">
              {list?.length > 1 && <Icons.List />}
              <ListItemText>
                {item.title && (
                  <span>
                    <Typography component="span" fontWeight={600}>
                      {parsedTitle(item)}
                    </Typography>
                    {` - `}
                  </span>
                )}
                {parseI18Data(item.text)}
                {item.link && (
                  <IconButton
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.link}
                    sx={{
                      p: 0,
                      margin: theme => theme.spacing(0, 0.625),
                      color: theme => getSxColor(theme),
                    }}
                    title={`${t('common:visit')}`}
                    size="large"
                  >
                    <OpenIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                )}
              </ListItemText>
            </Grid>
            <ExperienceSubItemList list={item.sub_items} />
          </ListItem>
          {item.stack?.length ?? 0 > 0 ? (
            <Typography
              sx={theme => ({
                paddingLeft: {
                  xs: list?.length > 1 ? theme.spacing(2) : 0,
                  sm: list?.length > 1 ? theme.spacing(4) : 0,
                },
                fontStyle: 'italic',
                pb: index !== list.length - 1 ? 1 : 0,
              })}
            >
              {`${t('common:experience.stack')}: ${item.stack?.join(', ')}.`}
            </Typography>
          ) : null}
        </React.Fragment>
      ))}
    </List>
  ) : null;
};

export default ExperienceItemList;
