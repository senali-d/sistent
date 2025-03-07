import { FC, ReactNode } from 'react';
import { DialogTitle } from '../../base/Dialog';
import { Typography } from '../../base/Typography';

interface DialogTitleProps {
  children: ReactNode;
}

const MesheryDialogTitle: FC<DialogTitleProps> = ({ children, ...props }) => {
  return (
    <DialogTitle
      sx={{
        padding: 0,
        backgroundColor: '#00B39F',
        color: 'white',
        bottom: '2px',
        boxShadow: '0px 4px 4px rgba(0, 179, 159, 0.4)'
      }}
      {...props}
    >
      <Typography
        sx={{
          flexGrow: 1,
          fontSize: '1.25rem',
          textAlign: 'center'
        }}
        variant="h6"
      >
        {children}
      </Typography>
    </DialogTitle>
  );
};

export { MesheryDialogTitle as StyledDialogTitle };
