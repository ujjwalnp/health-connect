import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const UploadPdf = ({ status_check }) => {
  if (!status_check) {
    return null; // If status is false, don't render anything
  }
  return (status_check=="True")? (
    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload Report
      <VisuallyHiddenInput type="file" />
    </Button>
  ):null;
};

export default UploadPdf;
