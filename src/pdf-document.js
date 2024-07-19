import React from 'react';
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});

export const MyDocument = ({data}) => {
    return (
        <Document>
            <Page size="A4" style={{backgroundColor: data?.get('color')}}>
                <View style={styles.section}>
                    <Text>{data?.get('firstName')}  {data?.get('lastName')}</Text>
                    <Text>{data?.get('role')}</Text>
                </View>
            </Page>
        </Document>
    )
};