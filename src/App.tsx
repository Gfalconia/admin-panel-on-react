import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const adminUrl = process.env.LIVETV_ADMIN;
const supervisordAz = process.env.SUPERVISORD_AZ;
const ruslanaAdmin = process.env.RUSLANA_ADMIN;
const serverAz = process.env.SERVER_AZ;

export default function ResponsiveDrawer() {

  return (
    <Stack spacing={2} direction="column">
      <Button href={adminUrl} variant="text">livetv.az админ панель</Button>
      <Button href={ruslanaAdmin} variant="text">Руслана админ панель</Button>
      <Button href={serverAz} variant="text">Азербайджанские каналы редактор</Button>
      <Button href={supervisordAz} variant="text">Азербайджанские каналы статус и перезапуск</Button>
    </Stack>
  );

}