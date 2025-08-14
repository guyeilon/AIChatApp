import React from 'react';
import { Link, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styled from 'styled-components';

interface Props {
  href: string;
  title: string;
}

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  color: #1a73e8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LinkMessage: React.FC<Props> = ({ href, title }) => (
  <Typography variant="body1" component="div" my={1}>
    <StyledLink href={href} target="_blank" rel="noreferrer">
      {title}
      <OpenInNewIcon fontSize="small" />
    </StyledLink>
  </Typography>
);

export default LinkMessage;
