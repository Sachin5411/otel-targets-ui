import Layout from "../../Layout";
import { Box, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import React, { useEffect, useState } from 'react';
// import config from '../../config';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';


interface StaticConfig {
    targets: string[];
  }
  
  interface Namespaces {
    names: string[];
    own_namespace: boolean;
  }
  
  interface KubernetesSDConfig {
    enable_http2: boolean;
    follow_redirects: boolean;
    kubeconfig_file: string;
    namespaces: Namespaces;
    role: string;
  }
  
  interface RelabelConfig {
    action: string;
    regex: string;
    replacement: string;
    separator: string;
    source_labels?: string[];
    target_label?: string;
    modulus?: number;
  }
  
  interface Job {
    enable_http2: boolean;
    follow_redirects: boolean;
    honor_timestamps: boolean;
    job_name: string;
    metrics_path: string;
    scheme: string;
    scrape_interval: string;
    scrape_timeout: string;
    static_configs?: StaticConfig[];
    kubernetes_sd_configs?: KubernetesSDConfig[];
    relabel_configs?: RelabelConfig[];
    track_timestamps_staleness: boolean;
  }
  
  interface Data {
    [key: string]: Job;
  }


// Interfaces defined above

const Targets: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const target = process.env.REACT_APP_TARGET_ENDPOINT || 'http://localhost:3000/jobs'
        const response = await fetch(target);
        const result: Data = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <Layout>
    <Box sx={{
        color: "#326ba8",
        width: "100%"
  }}>
    <AppBar position="static">
    <Toolbar>
        <Typography
        variant="h3"
        component="h1"
        my={2}
        fontWeight={800}
        fontSize={30}
    >
        Targets
    </Typography>
    </Toolbar>
  </AppBar>
    <h1>...Loading</h1>
    </Box>
    </Layout>;
  }

  const rows = Object.entries(data).map(([key, value]) => ({
    name: key,
    ...value
  }));

  return (
    <Layout>
        <Box sx={{
            color: "#326ba8",
            width: "100%"
      }}>
        <AppBar position="static">
        <Toolbar>
            <Typography
            variant="h3"
            component="h1"
            my={2}
            fontWeight={800}
            fontSize={30}
        >
            Targets
        </Typography>
        </Toolbar>
      </AppBar>
        
        </Box>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Job Name</TableCell>
            <TableCell>Namespace</TableCell>
            <TableCell>Enable HTTP2</TableCell>
            <TableCell>Follow Redirects</TableCell>
            <TableCell>Metrics Path</TableCell>
            <TableCell>Scheme</TableCell>
            <TableCell>Scrape Interval</TableCell>
            <TableCell>Scrape Timeout</TableCell>
            <TableCell>Track Timestamps Staleness</TableCell>
            {/* Add other relevant columns as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.job_name}</TableCell>
              <TableCell>{(row.kubernetes_sd_configs && row.kubernetes_sd_configs[0].namespaces.names) || "undefined"}</TableCell>
              <TableCell>{row.enable_http2 ? 'Yes' : 'No'}</TableCell>
              <TableCell>{row.follow_redirects ? 'Yes' : 'No'}</TableCell>
              <TableCell>{row.metrics_path}</TableCell>
              <TableCell>{row.scheme}</TableCell>
              <TableCell>{row.scrape_interval}</TableCell>
              <TableCell>{row.scrape_timeout}</TableCell>
              <TableCell>{row.track_timestamps_staleness ? 'Yes' : 'No'}</TableCell>
              {/* Add other relevant cells as needed */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Layout>
  );
};

export default Targets;
