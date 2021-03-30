import React from 'react';

import { Box, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

export default function ParamTable({ items = [] }: ParamTableProps) {
    const classes = useStyles();

    if (!items.length) {
        return null;
    }

    return (
        <Typography className={classes.root} component="div">
            {items.map((item: ParamTableItem, index: number) => (
                <Box className={classes.row} key={index} display="flex" fontSize={16}>
                    <Box className={classes.title}>{item.title}</Box>
                    <Box className={classes.value}>{item.value ? item.value : ''}</Box>
                </Box>
            ))}
        </Typography>
    );
}

interface ParamTableProps {
    items: ParamTableItem[];
}

export interface ParamTableItem {
    title: string;
    value?: string;
}

const useStyles = makeStyles(theme => ({
    root: {},
    row: {
        borderBottom: '1px solid grey',
    },
    title: {
        fontWeight: 600,
    },
    value: {
        marginLeft: 'auto',
        textAlign: 'right',
    },
}));
