import React from 'react';

import { FieldTemplateProps } from 'react-jsonschema-form';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  rawDescription,
  formContext,
}: FieldTemplateProps) => {
  const template = (
    <FormControl fullWidth={true} error={rawErrors.length ? true : false}>
      {children}
      {displayLabel && rawDescription ? (
        <Typography variant="caption" color="textSecondary">
          {rawDescription}
        </Typography>
      ) : null}
      {rawErrors.length > 0 && (
        <List dense={true}>
          {rawErrors.map((error, i: number) => {
            return (
              <ListItem key={i}>
                <FormHelperText id={id}>- {error}</FormHelperText>
              </ListItem>
            );
          })}
        </List>
      )}
      {rawHelp && <FormHelperText id={id}>{rawHelp}</FormHelperText>}
    </FormControl>
  );
  return formContext.muiOptions && formContext.muiOptions.theme ? (
    <ThemeProvider theme={formContext.muiOptions.theme}>
      {template}
    </ThemeProvider>
  ) : (
    template
  );
};

export default FieldTemplate;
