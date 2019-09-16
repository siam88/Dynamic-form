import React, { useState } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import defaultStyles from "./tableLight.module.css";

import Image from "../../ui/imageUploader/image";
import { Grid, Button } from "@material-ui/core";

export default function table(Props) {
    let props = { ...Props };
    props.styles = props.styles ? props.styles : defaultStyles;
    return (
        <Table className={props.styles.root}>
            <TableHead>
                <TableRow>{renderTableHeader(props.tableHeaders, props)}</TableRow>
            </TableHead>
            <TableBody>
                {props.tableData.map((e, i) => (
                    <TableRow>{renderTableCells(e, i, props)}</TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

const renderVarientImages = (images, index, props, file) => {
    if (images.length > 1)
        return (
            <Grid
                container
                style={{
                    height: "120px",
                    width: "130px",
                    overflow: "auto",
                    border: "1px solid rgb(134, 134, 134)"
                }}
                spacing={12}
            >
                {images.map((e, i) => {
                    return (
                        <Grid item xs={6}>
                            <Image
                                key={i}
                                url={e}
                                deleteImage={() => props.deleteImage(index, i)}
                                height={50}
                                width={50}
                                file={file}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        );
    else if (images.length === 1)
        return (
            <Image url={images[0]} deleteImage={() => props.deleteImage(index, 0)} />
        );
    else return <p style={{ color: "red" }}>No images</p>;
};

const renderTableHeader = (headerArray, props) => {
    let tableCells = [];
    headerArray.forEach((e, i) => {
        tableCells.push(
            <TableCell key={i} className={props.styles.tableCell}>
                {e}
            </TableCell>
        );
    });
    return tableCells;
};

const renderTableCells = (obj, i, props) => {
    let tableCells = [];
    for (let e in obj) {
        let v = null;
        if (e.toLowerCase().includes("image"))
            v = (
                <TableCell className={props.styles.tableCell}>
                    {renderVarientImages(obj[e], i, props, true)}
                </TableCell>
            );
        else {
            if (e === "color") {
                v = (
                    <TableCell className={props.styles.tableCell}>
                        <div
                            style={{
                                backgroundColor: obj[e],
                                height: "25px",
                                width: "25px",
                                borderRadius: "50%"
                            }}
                        />{" "}
                    </TableCell>
                );
            } else
                v = <TableCell className={props.styles.tableCell}>{obj[e]}</TableCell>;
        }

        tableCells.push(v);
    }

    return tableCells;
};
