export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-ai-results",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "endpoint",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endpoint VARCHAR(255) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE SET NULL"
      },
      {
        "name": "input_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data JSONB NOT NULL"
      },
      {
        "name": "raw_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_response TEXT"
      },
      {
        "name": "parsed_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parsed_result JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(255)"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "success",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "success BOOLEAN DEFAULT true"
      },
      {
        "name": "error_message",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error_message TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-build-time-estimates",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "build_time_estimates",
    "displayName": "Build Time Estimates",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "model_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "dimensions_x",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions_x DECIMAL(8,2)"
      },
      {
        "name": "dimensions_y",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions_y DECIMAL(8,2)"
      },
      {
        "name": "dimensions_z",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions_z DECIMAL(8,2)"
      },
      {
        "name": "layer_height",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "layer_height DECIMAL(4,2)"
      },
      {
        "name": "infill_density",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "infill_density INTEGER"
      },
      {
        "name": "print_speed",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "print_speed INTEGER"
      },
      {
        "name": "material_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_type VARCHAR(100)"
      },
      {
        "name": "estimated_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_hours DECIMAL(8,2)"
      },
      {
        "name": "complexity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "complexity VARCHAR(50)"
      },
      {
        "name": "ai_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_result JSONB"
      },
      {
        "name": "ai_model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_model_used VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-failure-predictions",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "failure_predictions",
    "displayName": "Failure Predictions",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "print_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "print_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "material_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "layer_height",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "layer_height DECIMAL(4,2)"
      },
      {
        "name": "nozzle_temp",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nozzle_temp INTEGER"
      },
      {
        "name": "bed_temp",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bed_temp INTEGER"
      },
      {
        "name": "print_speed",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "print_speed INTEGER"
      },
      {
        "name": "geometry_complexity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "geometry_complexity VARCHAR(50)"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(50)"
      },
      {
        "name": "failure_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "failure_type VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "prediction_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prediction_result JSONB"
      },
      {
        "name": "ai_model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_model_used VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-ai-build-time-estimator-material-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_build_time_estimator_material.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-ai-cost-optimization-material-waste-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_cost_optimization_material_waste.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-ai-pre-print-quality-defect-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_pre_print_quality_defect.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-ai-slicing-parameter-recommender-stl-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_slicing_parameter_recommender_stl.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-ai-streaming-printer-health-anomaly-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_ai_streaming_printer_health_anomaly.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-filament-auto-reorder-when-stock-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_filament_auto_reorder_when_stock.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-multi-material-scheduling-coordination-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_multi_material_scheduling_coordination.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-multi-tenant-customer-separation-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_multi_tenant_customer_separation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-notifications-subsystem-app-email-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_notifications_subsystem_app_email.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-outbound-webhooks-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_outbound_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-routes-gap-upload-time-stl-printability-validation-js-gap-features",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_upload_time_stl_printability_validation.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-maintenance-forecasts",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "maintenance_forecasts",
    "displayName": "Maintenance Forecasts",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "printer_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "printer_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "printer_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "printer_id INTEGER"
      },
      {
        "name": "forecast_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "forecast_result JSONB"
      },
      {
        "name": "ai_model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_model_used VARCHAR(255)"
      },
      {
        "name": "next_maintenance_predicted",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_maintenance_predicted DATE"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(8,2)"
      },
      {
        "name": "urgency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "urgency VARCHAR(50)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-maintenance-logs",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "maintenance_logs",
    "displayName": "Maintenance Logs",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "printer_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "printer_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "maintenance_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maintenance_type VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "performed_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "performed_by VARCHAR(255)"
      },
      {
        "name": "cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost DECIMAL(8,2)"
      },
      {
        "name": "next_maintenance_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_maintenance_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Completed'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Completed'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-material-selections",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "material_selections",
    "displayName": "Material Selections",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "application",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "application VARCHAR(255)"
      },
      {
        "name": "strength_required",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strength_required INTEGER"
      },
      {
        "name": "flexibility_required",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "flexibility_required INTEGER"
      },
      {
        "name": "heat_resistance",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "heat_resistance VARCHAR(50)"
      },
      {
        "name": "chemical_resistance",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chemical_resistance VARCHAR(50)"
      },
      {
        "name": "recommended_material",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommended_material VARCHAR(100)"
      },
      {
        "name": "budget_level",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget_level VARCHAR(50)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "ai_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_result JSONB"
      },
      {
        "name": "ai_model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_model_used VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-materials",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "materials",
    "displayName": "Materials",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "brand",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand VARCHAR(100)"
      },
      {
        "name": "color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color VARCHAR(50)"
      },
      {
        "name": "diameter",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "diameter DECIMAL(4,2)"
      },
      {
        "name": "weight_grams",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "weight_grams INTEGER"
      },
      {
        "name": "price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price DECIMAL(8,2)"
      },
      {
        "name": "nozzle_temp_min",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nozzle_temp_min INTEGER"
      },
      {
        "name": "nozzle_temp_max",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nozzle_temp_max INTEGER"
      },
      {
        "name": "bed_temp_min",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bed_temp_min INTEGER"
      },
      {
        "name": "bed_temp_max",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bed_temp_max INTEGER"
      },
      {
        "name": "in_stock",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "in_stock BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-print-jobs",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "print_jobs",
    "displayName": "Print Jobs",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "job_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "job_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "printer_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "printer_name VARCHAR(255)"
      },
      {
        "name": "material_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_type VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'queued'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'queued'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Normal'",
        "sourceLine": "priority VARCHAR(50) DEFAULT 'Normal'"
      },
      {
        "name": "estimated_time",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_time DECIMAL(8,2)"
      },
      {
        "name": "material_weight_used_g",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_weight_used_g DECIMAL(8,2)"
      },
      {
        "name": "file_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "file_name VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "ai_analysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-print-parameters",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "print_parameters",
    "displayName": "Print Parameters",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "material_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "geometry_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "geometry_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "layer_height",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "layer_height DECIMAL(4,2)"
      },
      {
        "name": "nozzle_temp",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nozzle_temp INTEGER"
      },
      {
        "name": "bed_temp",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bed_temp INTEGER"
      },
      {
        "name": "print_speed",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "print_speed INTEGER"
      },
      {
        "name": "infill_density",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "infill_density INTEGER"
      },
      {
        "name": "support_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "support_enabled BOOLEAN DEFAULT false"
      },
      {
        "name": "ai_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_result JSONB"
      },
      {
        "name": "ai_model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_model_used VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-print-profiles",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "print_profiles",
    "displayName": "Print Profiles",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "profile_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "profile_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "material_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_type VARCHAR(100)"
      },
      {
        "name": "layer_height",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "layer_height DECIMAL(4,2)"
      },
      {
        "name": "nozzle_temp",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nozzle_temp INTEGER"
      },
      {
        "name": "bed_temp",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bed_temp INTEGER"
      },
      {
        "name": "print_speed",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "print_speed INTEGER"
      },
      {
        "name": "infill_density",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "infill_density INTEGER"
      },
      {
        "name": "retraction_enabled",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "retraction_enabled BOOLEAN DEFAULT true"
      },
      {
        "name": "retraction_distance",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "retraction_distance DECIMAL(4,2)"
      },
      {
        "name": "fan_speed",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fan_speed INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-printers",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "printers",
    "displayName": "Printers",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(255)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(255)"
      },
      {
        "name": "build_volume_x",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "build_volume_x INTEGER"
      },
      {
        "name": "build_volume_y",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "build_volume_y INTEGER"
      },
      {
        "name": "build_volume_z",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "build_volume_z INTEGER"
      },
      {
        "name": "nozzle_diameter",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nozzle_diameter DECIMAL(4,2)"
      },
      {
        "name": "max_temp",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "max_temp INTEGER"
      },
      {
        "name": "heated_bed",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "heated_bed BOOLEAN DEFAULT true"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'Idle'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'Idle'"
      },
      {
        "name": "total_print_hours",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_print_hours DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-quality-scores",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "quality_scores",
    "displayName": "Quality Scores",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "print_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "print_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "surface_quality",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "surface_quality INTEGER"
      },
      {
        "name": "dimensional_accuracy",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensional_accuracy INTEGER"
      },
      {
        "name": "layer_adhesion",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "layer_adhesion INTEGER"
      },
      {
        "name": "detail_resolution",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detail_resolution INTEGER"
      },
      {
        "name": "warping_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warping_level INTEGER"
      },
      {
        "name": "stringing_level",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stringing_level INTEGER"
      },
      {
        "name": "overall_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_score DECIMAL(4,2)"
      },
      {
        "name": "material_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_type VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "ai_result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_result JSONB"
      },
      {
        "name": "ai_model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_model_used VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai3-d-printing-optimizer-backend-seed-js-users",
    "sourceProject": "AI3DPrintingOptimizer",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password_hash",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password_hash VARCHAR(255) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-ai-backlog-js-ai-playbooks",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "ai_playbooks",
    "displayName": "Ai Playbooks",
    "framework": "SQL",
    "sourceFile": "server/routes/aiBacklog.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT NOT NULL"
      },
      {
        "name": "tags",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ARRAY[]::TEXT[]",
        "sourceLine": "tags TEXT[] DEFAULT ARRAY[]::TEXT[]"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-ai-results",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100)"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "user_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_email VARCHAR(255)"
      },
      {
        "name": "request_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "request_payload JSONB"
      },
      {
        "name": "response",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-alternative-parts",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "alternative_parts",
    "displayName": "Alternative Parts",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "original_part_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "original_part_id INTEGER REFERENCES bom_items(id) ON DELETE CASCADE"
      },
      {
        "name": "alt_part_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alt_part_number VARCHAR(100) NOT NULL"
      },
      {
        "name": "alt_part_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alt_part_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "alt_manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alt_manufacturer VARCHAR(255)"
      },
      {
        "name": "alt_unit_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alt_unit_cost DECIMAL(12,2)"
      },
      {
        "name": "alt_supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "alt_supplier VARCHAR(255)"
      },
      {
        "name": "compatibility_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compatibility_score DECIMAL(5,2)"
      },
      {
        "name": "cost_savings_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_savings_percent DECIMAL(5,2)"
      },
      {
        "name": "lead_time_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead_time_days INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-audit-log",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "audit_log",
    "displayName": "Audit Log",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_email VARCHAR(255)"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(50) NOT NULL"
      },
      {
        "name": "entity_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "entity_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_id INTEGER"
      },
      {
        "name": "entity_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "entity_name VARCHAR(255)"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-bom-items",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "bom_items",
    "displayName": "Bom Items",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "part_number",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_number VARCHAR(100) NOT NULL"
      },
      {
        "name": "part_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "part_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(255)"
      },
      {
        "name": "unit_cost",
        "type": "DECIMAL",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_cost DECIMAL(12,2) NOT NULL"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity INTEGER NOT NULL DEFAULT 1"
      },
      {
        "name": "total_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cost DECIMAL(12,2)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "parent_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parent_id INTEGER REFERENCES bom_items(id) ON DELETE SET NULL"
      },
      {
        "name": "ai_optimization_notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_optimization_notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-bom-version-items",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "bom_version_items",
    "displayName": "Bom Version Items",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "bom_version_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bom_version_id INTEGER REFERENCES bom_versions(id) ON DELETE CASCADE"
      },
      {
        "name": "bom_item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bom_item_id INTEGER REFERENCES bom_items(id) ON DELETE CASCADE"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity INTEGER DEFAULT 1"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-bom-versions",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "bom_versions",
    "displayName": "Bom Versions",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "version_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "version_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "version_number VARCHAR(20)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "total_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cost DECIMAL(12,2)"
      },
      {
        "name": "total_items",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_items INTEGER"
      },
      {
        "name": "change_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "change_type VARCHAR(100)"
      },
      {
        "name": "changed_by",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "changed_by VARCHAR(255)"
      },
      {
        "name": "change_reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "change_reason TEXT"
      },
      {
        "name": "baseline_version_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "baseline_version_id INTEGER"
      },
      {
        "name": "cost_difference",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_difference DECIMAL(12,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "ai_comparison",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_comparison TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-compliance-records",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "compliance_records",
    "displayName": "Compliance Records",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "bom_item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bom_item_id INTEGER REFERENCES bom_items(id) ON DELETE CASCADE"
      },
      {
        "name": "regulation_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulation_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "compliance_status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "compliance_status VARCHAR(50) NOT NULL"
      },
      {
        "name": "certificate_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certificate_number VARCHAR(100)"
      },
      {
        "name": "expiry_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiry_date DATE"
      },
      {
        "name": "testing_lab",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "testing_lab VARCHAR(255)"
      },
      {
        "name": "test_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "test_date DATE"
      },
      {
        "name": "rohs_compliant",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "rohs_compliant BOOLEAN DEFAULT false"
      },
      {
        "name": "reach_compliant",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "reach_compliant BOOLEAN DEFAULT false"
      },
      {
        "name": "conflict_mineral_free",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "conflict_mineral_free BOOLEAN DEFAULT false"
      },
      {
        "name": "documentation_url",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "documentation_url VARCHAR(500)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "ai_assessment",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_assessment TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-cost-down-analyses",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "cost_down_analyses",
    "displayName": "Cost Down Analyses",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "bom_item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bom_item_id INTEGER REFERENCES bom_items(id) ON DELETE CASCADE"
      },
      {
        "name": "analysis_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "current_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_cost DECIMAL(12,2)"
      },
      {
        "name": "target_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_cost DECIMAL(12,2)"
      },
      {
        "name": "achieved_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "achieved_cost DECIMAL(12,2)"
      },
      {
        "name": "savings_amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_amount DECIMAL(12,2)"
      },
      {
        "name": "savings_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "savings_percent DECIMAL(5,2)"
      },
      {
        "name": "strategy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strategy TEXT"
      },
      {
        "name": "implementation_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'proposed'",
        "sourceLine": "implementation_status VARCHAR(50) DEFAULT 'proposed'"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priority VARCHAR(20)"
      },
      {
        "name": "ai_suggestions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_suggestions TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-no-ai-compliance-clause-extraction-from-datasheets-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_ai_compliance_clause_extraction_from_datasheets.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-no-ai-lead-time-forecasting-per-supplier-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_ai_lead_time_forecasting_per_supplier.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-no-ai-obsolescence-prediction-logic-records-page-e-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_ai_obsolescence_prediction_logic_records_page_e.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-no-ai-pcn-product-change-notification-summarizatio-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_ai_pcn_product_change_notification_summarizatio.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-no-cad-eda-tool-import-altium-kicad-cadence-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_cad_eda_tool_import_altium_kicad_cadence.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-no-multi-currency-cost-tracking-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_multi_currency_cost_tracking.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-no-outbound-edi-for-supplier-purchase-orders-webho-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_outbound_edi_for_supplier_purchase_orders_webho.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-no-pcn-ingestion-pipeline-only-an-obsolescence-pre-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_no_pcn_ingestion_pipeline_only_an_obsolescence_pre.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-notification-system-table-exists-but-no-email-sms-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_notification_system_table_exists_but_no_email_sms_.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-gap-only-1-mounted-ai-endpoint-despite-19-routes-no-ai-js-gap-features",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "server/routes/gap_only_1_mounted_ai_endpoint_despite_19_routes_no_ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-inventory-records",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "inventory_records",
    "displayName": "Inventory Records",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "bom_item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bom_item_id INTEGER REFERENCES bom_items(id) ON DELETE CASCADE"
      },
      {
        "name": "warehouse_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "warehouse_location VARCHAR(100)"
      },
      {
        "name": "current_stock",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "current_stock INTEGER DEFAULT 0"
      },
      {
        "name": "minimum_stock",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "minimum_stock INTEGER DEFAULT 0"
      },
      {
        "name": "reorder_point",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reorder_point INTEGER DEFAULT 0"
      },
      {
        "name": "reorder_quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "reorder_quantity INTEGER DEFAULT 0"
      },
      {
        "name": "max_stock",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "max_stock INTEGER DEFAULT 0"
      },
      {
        "name": "unit_of_measure",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pcs'",
        "sourceLine": "unit_of_measure VARCHAR(20) DEFAULT 'pcs'"
      },
      {
        "name": "last_restock_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_restock_date DATE"
      },
      {
        "name": "next_restock_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_restock_date DATE"
      },
      {
        "name": "stock_status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "stock_status VARCHAR(50)"
      },
      {
        "name": "holding_cost_per_unit",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "holding_cost_per_unit DECIMAL(10,2)"
      },
      {
        "name": "ai_recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-lead-time-records",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "lead_time_records",
    "displayName": "Lead Time Records",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "bom_item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bom_item_id INTEGER REFERENCES bom_items(id) ON DELETE CASCADE"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255) NOT NULL"
      },
      {
        "name": "standard_lead_time_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "standard_lead_time_days INTEGER"
      },
      {
        "name": "current_lead_time_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_lead_time_days INTEGER"
      },
      {
        "name": "expedited_lead_time_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expedited_lead_time_days INTEGER"
      },
      {
        "name": "last_order_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_order_date DATE"
      },
      {
        "name": "next_delivery_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_delivery_date DATE"
      },
      {
        "name": "reliability_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reliability_score DECIMAL(5,2)"
      },
      {
        "name": "trend",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "trend VARCHAR(20)"
      },
      {
        "name": "ai_forecast",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_forecast TEXT"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-notifications-js-notification-log",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "notification_log",
    "displayName": "Notification Log",
    "framework": "SQL",
    "sourceFile": "server/routes/notifications.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "channel",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channel VARCHAR(32) NOT NULL"
      },
      {
        "name": "to_address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "to_address TEXT"
      },
      {
        "name": "subject",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject TEXT"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'prepared'",
        "sourceLine": "status VARCHAR(32) NOT NULL DEFAULT 'prepared'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-obsolescence-predictions",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "obsolescence_predictions",
    "displayName": "Obsolescence Predictions",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "bom_item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bom_item_id INTEGER REFERENCES bom_items(id) ON DELETE CASCADE"
      },
      {
        "name": "risk_level",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_level VARCHAR(20) NOT NULL"
      },
      {
        "name": "predicted_eol_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predicted_eol_date DATE"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5,2)"
      },
      {
        "name": "lifecycle_stage",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lifecycle_stage VARCHAR(50)"
      },
      {
        "name": "last_buy_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_buy_date DATE"
      },
      {
        "name": "recommended_action",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommended_action TEXT"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "mitigation_strategy",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation_strategy TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-risk-assessments",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "risk_assessments",
    "displayName": "Risk Assessments",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "bom_item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bom_item_id INTEGER REFERENCES bom_items(id) ON DELETE CASCADE"
      },
      {
        "name": "risk_category",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_category VARCHAR(100) NOT NULL"
      },
      {
        "name": "risk_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_score DECIMAL(5,2)"
      },
      {
        "name": "probability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "probability VARCHAR(20)"
      },
      {
        "name": "impact",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "impact VARCHAR(20)"
      },
      {
        "name": "supply_chain_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supply_chain_risk VARCHAR(20)"
      },
      {
        "name": "geopolitical_risk",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "geopolitical_risk VARCHAR(20)"
      },
      {
        "name": "single_source_risk",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "single_source_risk BOOLEAN DEFAULT false"
      },
      {
        "name": "mitigation_plan",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mitigation_plan TEXT"
      },
      {
        "name": "contingency_plan",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contingency_plan TEXT"
      },
      {
        "name": "risk_owner",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "risk_owner VARCHAR(255)"
      },
      {
        "name": "review_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "review_date DATE"
      },
      {
        "name": "ai_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_analysis TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-suppliers",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "suppliers",
    "displayName": "Suppliers",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR(255)"
      },
      {
        "name": "contact_phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_phone VARCHAR(50)"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT"
      },
      {
        "name": "country",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "country VARCHAR(100)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,1)"
      },
      {
        "name": "quality_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score DECIMAL(5,2)"
      },
      {
        "name": "delivery_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_score DECIMAL(5,2)"
      },
      {
        "name": "price_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price_score DECIMAL(5,2)"
      },
      {
        "name": "total_orders",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_orders INTEGER DEFAULT 0"
      },
      {
        "name": "on_time_delivery_percent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "on_time_delivery_percent DECIMAL(5,2)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "ai_evaluation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_evaluation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-schema-sql-users",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "server/schema.sql",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-webhooks-js-webhooks",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "server/routes/webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "url",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url TEXT NOT NULL"
      },
      {
        "name": "events",
        "type": "TEXT[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ARRAY['bom.updated']::text[]",
        "sourceLine": "events TEXT[] NOT NULL DEFAULT ARRAY['bom.updated']::text[]"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret VARCHAR(255)"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-billof-materials-optimizer-server-routes-ai-backlog-js-whitelabel-settings",
    "sourceProject": "AIBillofMaterialsOptimizer",
    "name": "whitelabel_settings",
    "displayName": "Whitelabel Settings",
    "framework": "SQL",
    "sourceFile": "server/routes/aiBacklog.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER UNIQUE"
      },
      {
        "name": "brand_name",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'AI",
        "sourceLine": "brand_name TEXT NOT NULL DEFAULT 'AI BOM Optimizer'"
      },
      {
        "name": "primary_color",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'#1f6feb'",
        "sourceLine": "primary_color VARCHAR(16) NOT NULL DEFAULT '#1f6feb'"
      },
      {
        "name": "logo_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo_url TEXT"
      },
      {
        "name": "support_email",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "support_email TEXT"
      },
      {
        "name": "tenant_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tenant_slug VARCHAR(64)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-extensions-js-agent-runs",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "agent_runs",
    "displayName": "Agent Runs",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "topology",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "topology VARCHAR(40)"
      },
      {
        "name": "objective",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "objective TEXT"
      },
      {
        "name": "steps",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "steps JSONB"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'queued'",
        "sourceLine": "status VARCHAR(40) DEFAULT 'queued'"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-batches-js-batches",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "batches",
    "displayName": "Batches",
    "framework": "SQL",
    "sourceFile": "backend/routes/batches.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "batch_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "batch_number VARCHAR(50) UNIQUE"
      },
      {
        "name": "recipe_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipe_name VARCHAR(100) NOT NULL"
      },
      {
        "name": "style",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style VARCHAR(100)"
      },
      {
        "name": "abv",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "abv NUMERIC(5,2)"
      },
      {
        "name": "og",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "og NUMERIC(6,4)"
      },
      {
        "name": "fg",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fg NUMERIC(6,4)"
      },
      {
        "name": "ibu",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ibu INTEGER"
      },
      {
        "name": "batch_size_gallons",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batch_size_gallons NUMERIC(8,2)"
      },
      {
        "name": "brew_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brew_date DATE"
      },
      {
        "name": "brewer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brewer VARCHAR(100)"
      },
      {
        "name": "yeast_strain",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "yeast_strain VARCHAR(100)"
      },
      {
        "name": "fermentation_temp",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fermentation_temp NUMERIC(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planned'"
      },
      {
        "name": "ingredients",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ingredients JSONB"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-brew-logs",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "brew_logs",
    "displayName": "Brew Logs",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "batch_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batch_id VARCHAR(50)"
      },
      {
        "name": "recipe_name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipe_name VARCHAR(255) NOT NULL"
      },
      {
        "name": "style",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style VARCHAR(255)"
      },
      {
        "name": "brew_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brew_date DATE"
      },
      {
        "name": "brewer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brewer VARCHAR(255)"
      },
      {
        "name": "grain_bill",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "grain_bill TEXT"
      },
      {
        "name": "hops",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hops TEXT"
      },
      {
        "name": "yeast",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "yeast VARCHAR(255)"
      },
      {
        "name": "mash_temp",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mash_temp DECIMAL(5,1)"
      },
      {
        "name": "og",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "og DECIMAL(5,3)"
      },
      {
        "name": "fg",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fg DECIMAL(5,3)"
      },
      {
        "name": "abv",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "abv DECIMAL(4,1)"
      },
      {
        "name": "ibu",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ibu DECIMAL(5,1)"
      },
      {
        "name": "volume_gallons",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "volume_gallons DECIMAL(10,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planning'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planning'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-cip-schedules",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "cip_schedules",
    "displayName": "Cip Schedules",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "equipment",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment VARCHAR(255)"
      },
      {
        "name": "scheduled_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduled_date DATE"
      },
      {
        "name": "completed_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "completed_date DATE"
      },
      {
        "name": "cip_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cip_type VARCHAR(50)"
      },
      {
        "name": "chemical_concentration",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "chemical_concentration VARCHAR(100)"
      },
      {
        "name": "temperature",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature DECIMAL(5,1)"
      },
      {
        "name": "duration_minutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "duration_minutes INTEGER"
      },
      {
        "name": "operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operator VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "verification",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "verification VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-distributions",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "distributions",
    "displayName": "Distributions",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "distributor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "distributor VARCHAR(255)"
      },
      {
        "name": "order_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "order_date DATE"
      },
      {
        "name": "delivery_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "delivery_date DATE"
      },
      {
        "name": "product",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "product VARCHAR(255)"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity INTEGER"
      },
      {
        "name": "unit_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_price DECIMAL(10,2)"
      },
      {
        "name": "total",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total DECIMAL(10,2)"
      },
      {
        "name": "region",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "tracking_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tracking_number VARCHAR(100)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-equipment",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "equipment",
    "displayName": "Equipment",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(100)"
      },
      {
        "name": "manufacturer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer VARCHAR(255)"
      },
      {
        "name": "model",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model VARCHAR(255)"
      },
      {
        "name": "serial_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serial_number VARCHAR(100)"
      },
      {
        "name": "purchase_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchase_date DATE"
      },
      {
        "name": "last_maintenance",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_maintenance DATE"
      },
      {
        "name": "next_maintenance",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_maintenance DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'operational'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'operational'"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-events",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "events",
    "displayName": "Events",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "start_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "start_time TIME"
      },
      {
        "name": "end_time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "end_time TIME"
      },
      {
        "name": "capacity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "capacity INTEGER"
      },
      {
        "name": "tickets_sold",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "tickets_sold INTEGER DEFAULT 0"
      },
      {
        "name": "ticket_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ticket_price DECIMAL(10,2)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'planned'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-fermentation-logs",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "fermentation_logs",
    "displayName": "Fermentation Logs",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "batch_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batch_id INTEGER"
      },
      {
        "name": "tank_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tank_id INTEGER"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time TIME"
      },
      {
        "name": "temperature",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature DECIMAL(5,1)"
      },
      {
        "name": "gravity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gravity DECIMAL(5,3)"
      },
      {
        "name": "ph",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ph DECIMAL(4,2)"
      },
      {
        "name": "dissolved_oxygen",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dissolved_oxygen DECIMAL(6,2)"
      },
      {
        "name": "pressure_psi",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pressure_psi DECIMAL(5,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-financial-records",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "financial_records",
    "displayName": "Financial Records",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(20)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50)"
      },
      {
        "name": "amount",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount DECIMAL(12,2)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "reference_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reference_number VARCHAR(100)"
      },
      {
        "name": "vendor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor VARCHAR(255)"
      },
      {
        "name": "payment_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method VARCHAR(50)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-no-ai-customer-feedback-sentiment-loop-into-recipe-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_customer_feedback_sentiment_loop_into_recipe.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-no-ai-tap-room-demand-forecasting-per-hour-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_tap_room_demand_forecasting_per_hour.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-no-ai-tasting-note-generator-for-marketing-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_ai_tasting_note_generator_for_marketing.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-no-direct-pos-vendor-api-client-beyond-stored-tran-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_direct_pos_vendor_api_client_beyond_stored_tran.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-no-export-reporting-module-for-ttb-state-complianc-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_export_reporting_module_for_ttb_state_complianc.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-no-iot-sensor-stream-ingestion-layer-for-fermenter-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_iot_sensor_stream_ingestion_layer_for_fermenter.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-no-notification-system-alerts-module-is-storage-on-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_notification_system_alerts_module_is_storage_on.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-no-vision-based-fermentation-clarity-monitoring-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_no_vision_based_fermentation_clarity_monitoring.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-gap-only-8-frontend-pages-despite-21-backend-routes-ui-js-gap-features",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap_only_8_frontend_pages_despite_21_backend_routes_ui.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "input_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_payload JSONB"
      },
      {
        "name": "output_payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output_payload JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-kegs",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "kegs",
    "displayName": "Kegs",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "keg_id",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "keg_id VARCHAR(50) NOT NULL"
      },
      {
        "name": "beer_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beer_name VARCHAR(255)"
      },
      {
        "name": "batch_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batch_id INTEGER"
      },
      {
        "name": "size",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "size VARCHAR(50)"
      },
      {
        "name": "fill_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fill_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'empty'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'empty'"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "distributor",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "distributor VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-lab-results",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "lab_results",
    "displayName": "Lab Results",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "batch_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batch_id INTEGER"
      },
      {
        "name": "test_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "test_type VARCHAR(100)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "result",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result VARCHAR(255)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "expected_range",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expected_range VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "technician",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "technician VARCHAR(255)"
      },
      {
        "name": "equipment_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_used VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-loyalty-members",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "loyalty_members",
    "displayName": "Loyalty Members",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "tier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'bronze'",
        "sourceLine": "tier VARCHAR(50) DEFAULT 'bronze'"
      },
      {
        "name": "points",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "points INTEGER DEFAULT 0"
      },
      {
        "name": "join_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "join_date DATE"
      },
      {
        "name": "visits",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "visits INTEGER DEFAULT 0"
      },
      {
        "name": "total_spent",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "total_spent DECIMAL(10,2) DEFAULT 0"
      },
      {
        "name": "birthday",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "birthday DATE"
      },
      {
        "name": "favorite_beer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "favorite_beer VARCHAR(255)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-extensions-js-notifications",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "notifications",
    "displayName": "Notifications",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "channel",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "channel VARCHAR(40)"
      },
      {
        "name": "recipient",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recipient VARCHAR(255)"
      },
      {
        "name": "subject",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subject VARCHAR(255)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'queued'",
        "sourceLine": "status VARCHAR(40) DEFAULT 'queued'"
      },
      {
        "name": "provider_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-packaging-runs",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "packaging_runs",
    "displayName": "Packaging Runs",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "batch_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batch_id INTEGER"
      },
      {
        "name": "package_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "package_type VARCHAR(50)"
      },
      {
        "name": "quantity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity INTEGER"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "line",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "line VARCHAR(50)"
      },
      {
        "name": "operator",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operator VARCHAR(255)"
      },
      {
        "name": "fill_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fill_level DECIMAL(6,2)"
      },
      {
        "name": "co2_volumes",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "co2_volumes DECIMAL(4,2)"
      },
      {
        "name": "do_level",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "do_level DECIMAL(6,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'scheduled'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-pos-transactions",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "pos_transactions",
    "displayName": "Pos Transactions",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "transaction_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "transaction_id VARCHAR(50)"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date DATE"
      },
      {
        "name": "time",
        "type": "TIME",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "time TIME"
      },
      {
        "name": "items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items JSONB"
      },
      {
        "name": "subtotal",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subtotal DECIMAL(10,2)"
      },
      {
        "name": "tax",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tax DECIMAL(10,2)"
      },
      {
        "name": "tip",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tip DECIMAL(10,2)"
      },
      {
        "name": "total",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total DECIMAL(10,2)"
      },
      {
        "name": "payment_method",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_method VARCHAR(50)"
      },
      {
        "name": "server",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "server VARCHAR(255)"
      },
      {
        "name": "customer_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "customer_name VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-ai-js-quality-predictions",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "quality_predictions",
    "displayName": "Quality Predictions",
    "framework": "SQL",
    "sourceFile": "backend/routes/ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "batch_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "batch_id INTEGER NOT NULL"
      },
      {
        "name": "quality_score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quality_score INTEGER"
      },
      {
        "name": "flavor_profile",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "flavor_profile TEXT"
      },
      {
        "name": "potential_issues",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "potential_issues TEXT"
      },
      {
        "name": "raw_response",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "raw_response TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-extensions-js-rag-documents",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "rag_documents",
    "displayName": "Rag Documents",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "source",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source VARCHAR(40)"
      },
      {
        "name": "ref_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ref_id INTEGER"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255)"
      },
      {
        "name": "text",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "text TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-raw-materials",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "raw_materials",
    "displayName": "Raw Materials",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50)"
      },
      {
        "name": "quantity",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "lot_number",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lot_number VARCHAR(100)"
      },
      {
        "name": "cost_per_unit",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_per_unit DECIMAL(10,2)"
      },
      {
        "name": "reorder_point",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reorder_point DECIMAL(10,2)"
      },
      {
        "name": "expiration_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiration_date DATE"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'in-stock'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'in-stock'"
      },
      {
        "name": "storage_location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storage_location VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-tanks",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "tanks",
    "displayName": "Tanks",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100) NOT NULL"
      },
      {
        "name": "type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type VARCHAR(50)"
      },
      {
        "name": "capacity_gallons",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "capacity_gallons DECIMAL(10,2)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'available'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'available'"
      },
      {
        "name": "current_batch",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "current_batch VARCHAR(100)"
      },
      {
        "name": "temperature",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "temperature DECIMAL(5,1)"
      },
      {
        "name": "pressure_psi",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "pressure_psi DECIMAL(5,2)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-extensions-js-tenant-branding",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "tenant_branding",
    "displayName": "Tenant Branding",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "owner_user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "owner_user_id INTEGER"
      },
      {
        "name": "tenant_slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "tenant_slug VARCHAR(80) UNIQUE"
      },
      {
        "name": "brand_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "brand_name VARCHAR(120)"
      },
      {
        "name": "primary_color",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "primary_color VARCHAR(20)"
      },
      {
        "name": "logo_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "logo_url TEXT"
      },
      {
        "name": "contact_email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_email VARCHAR(255)"
      },
      {
        "name": "config",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "config JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-users",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-auth-js-users",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/routes/auth.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(100)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(200) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(200) NOT NULL"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'staff'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'staff'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-seed-js-vendors",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "vendors",
    "displayName": "Vendors",
    "framework": "SQL",
    "sourceFile": "backend/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(50)"
      },
      {
        "name": "contact_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contact_name VARCHAR(255)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "address",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address TEXT"
      },
      {
        "name": "website",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "website VARCHAR(255)"
      },
      {
        "name": "payment_terms",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payment_terms VARCHAR(100)"
      },
      {
        "name": "lead_time_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lead_time_days INTEGER"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,1)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'active'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-extensions-js-webhook-deliveries",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "webhook_deliveries",
    "displayName": "Webhook Deliveries",
    "framework": "SQL",
    "sourceFile": "backend/routes/extensions.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "webhook_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "webhook_id INTEGER"
      },
      {
        "name": "event",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "event VARCHAR(80)"
      },
      {
        "name": "payload",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "payload JSONB"
      },
      {
        "name": "status_code",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "status_code INTEGER"
      },
      {
        "name": "response_body",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "response_body TEXT"
      },
      {
        "name": "error",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "error TEXT"
      },
      {
        "name": "attempted_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "attempted_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-brewery-craft-beverage-ops-backend-routes-webhooks-js-webhooks",
    "sourceProject": "AIBreweryCraftBeverageOps",
    "name": "webhooks",
    "displayName": "Webhooks",
    "framework": "SQL",
    "sourceFile": "backend/routes/webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "url",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "url TEXT NOT NULL"
      },
      {
        "name": "events",
        "type": "TEXT[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "ARRAY['batch.completed']::text[]",
        "sourceLine": "events TEXT[] NOT NULL DEFAULT ARRAY['batch.completed']::text[]"
      },
      {
        "name": "secret",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "secret VARCHAR(255)"
      },
      {
        "name": "active",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "active BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-limited-exchange-api-integrations-no-coinbase-kraken-binance-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_limited_exchange_api_integrations_no_coinbase_kraken_binance.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-missing-analyze-crypto-tax-strategy-optimize-tax-loss-harves-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_missing_analyze_crypto_tax_strategy_optimize_tax_loss_harves.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-cpa-accountant-review-workflow-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_cpa_accountant_review_workflow.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-real-time-price-feed-integration-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_real_time_price_feed_integration.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-search-across-transactions-surface-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_search_across_transactions_surface.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-wallet-private-key-security-module-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_wallet_private_key_security_module.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-routes-gap-no-webhooks-js-gap-features",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_no_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "feature_slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "input_data_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input_data_json TEXT"
      },
      {
        "name": "result_json",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_json TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(120)"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-cryptocurrency-tax-calculator-backend-src-models-user-js-users",
    "sourceProject": "AICryptocurrencyTaxCalculator",
    "name": "users",
    "displayName": "Users",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/User.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "password",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-cost-analysis-js-cost-analyses",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "cost_analyses",
    "displayName": "Cost Analyses",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/CostAnalysis.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "costId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "costId: { ... }"
      },
      {
        "name": "category",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "subcategory",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subcategory: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "amount",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount: { ... }"
      },
      {
        "name": "budgeted",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budgeted: { ... }"
      },
      {
        "name": "variance",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "variance: { ... }"
      },
      {
        "name": "period",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "period: { ... }"
      },
      {
        "name": "zone",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone: { ... }"
      },
      {
        "name": "costPerTon",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "costPerTon: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'recorded'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-drill-pattern-js-drill-patterns",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "drill_patterns",
    "displayName": "Drill Patterns",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/DrillPattern.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "patternId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "patternId: { ... }"
      },
      {
        "name": "blastZone",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "blastZone: { ... }"
      },
      {
        "name": "holeCount",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "holeCount: { ... }"
      },
      {
        "name": "holeDepth",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "holeDepth: { ... }"
      },
      {
        "name": "holeDiameter",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "holeDiameter: { ... }"
      },
      {
        "name": "spacing",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "spacing: { ... }"
      },
      {
        "name": "burden",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "burden: { ... }"
      },
      {
        "name": "rockType",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rockType: { ... }"
      },
      {
        "name": "explosiveType",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "explosiveType: { ... }"
      },
      {
        "name": "explosiveAmount",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "explosiveAmount: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planned'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "aiOptimization",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiOptimization: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-environmental-compliance-js-environmental-compliance",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "environmental_compliance",
    "displayName": "Environmental Compliance",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/EnvironmentalCompliance.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "reportId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "reportId: { ... }"
      },
      {
        "name": "category",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "parameter",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "parameter: { ... }"
      },
      {
        "name": "measuredValue",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "measuredValue: { ... }"
      },
      {
        "name": "unit",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit: { ... }"
      },
      {
        "name": "regulatoryLimit",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regulatoryLimit: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "monitoringDate",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "monitoringDate: { ... }"
      },
      {
        "name": "complianceStatus",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'compliant'",
        "sourceLine": "complianceStatus: { ... }"
      },
      {
        "name": "inspector",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspector: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "aiAssessment",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAssessment: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-equipment-js-equipment",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "equipment",
    "displayName": "Equipment",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Equipment.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "equipmentId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "equipmentId: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "type",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type: { ... }"
      },
      {
        "name": "manufacturer",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "manufacturer: { ... }"
      },
      {
        "name": "model",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'operational'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "hoursOperated",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "hoursOperated: { ... }"
      },
      {
        "name": "fuelConsumption",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "fuelConsumption: { ... }"
      },
      {
        "name": "maintenanceDue",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "maintenanceDue: { ... }"
      },
      {
        "name": "lastMaintenance",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastMaintenance: { ... }"
      },
      {
        "name": "utilizationRate",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "utilizationRate: { ... }"
      },
      {
        "name": "aiRecommendation",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiRecommendation: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-ai-blast-pattern-optimizer-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-ai-blast-pattern-optimizer.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-ai-commodity-price-impact-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-ai-commodity-price-impact.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-ai-labor-fatigue-predictor-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-ai-labor-fatigue-predictor.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-ai-water-balance-forecaster-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-ai-water-balance-forecaster.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-lab-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-lab.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-mobile-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-mobile.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-native-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-native.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-operator-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-operator.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-real-time-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-real-time.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-routes-gap-webhooks-js-gap-features",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-geology-map-js-geology-maps",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "geology_maps",
    "displayName": "Geology Maps",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/GeologyMap.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "surveyId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "surveyId: { ... }"
      },
      {
        "name": "surveyType",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "surveyType: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "zone",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone: { ... }"
      },
      {
        "name": "rockFormation",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rockFormation: { ... }"
      },
      {
        "name": "dominantMineral",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dominantMineral: { ... }"
      },
      {
        "name": "structuralFeature",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "structuralFeature: { ... }"
      },
      {
        "name": "strikeAngle",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "strikeAngle: { ... }"
      },
      {
        "name": "dipAngle",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dipAngle: { ... }"
      },
      {
        "name": "depthRange",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depthRange: { ... }"
      },
      {
        "name": "surveyDate",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "surveyDate: { ... }"
      },
      {
        "name": "geologist",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "geologist: { ... }"
      },
      {
        "name": "confidence",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "confidence: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "aiInterpretation",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiInterpretation: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-hauling-logistic-js-hauling-logistics",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "hauling_logistics",
    "displayName": "Hauling Logistics",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/HaulingLogistic.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "tripId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "tripId: { ... }"
      },
      {
        "name": "truckId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "truckId: { ... }"
      },
      {
        "name": "driver",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "driver: { ... }"
      },
      {
        "name": "origin",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "origin: { ... }"
      },
      {
        "name": "destination",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "destination: { ... }"
      },
      {
        "name": "materialType",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materialType: { ... }"
      },
      {
        "name": "loadWeight",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "loadWeight: { ... }"
      },
      {
        "name": "distance",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "distance: { ... }"
      },
      {
        "name": "tripDuration",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tripDuration: { ... }"
      },
      {
        "name": "fuelUsed",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "fuelUsed: { ... }"
      },
      {
        "name": "date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "shift",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shift: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'completed'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "aiOptimization",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiOptimization: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-ore-grade-js-ore-grades",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "ore_grades",
    "displayName": "Ore Grades",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/OreGrade.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "sampleId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "sampleId: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "zone",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone: { ... }"
      },
      {
        "name": "depth",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "depth: { ... }"
      },
      {
        "name": "mineralType",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mineralType: { ... }"
      },
      {
        "name": "gradePercentage",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "gradePercentage: { ... }"
      },
      {
        "name": "tonnage",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tonnage: { ... }"
      },
      {
        "name": "confidence",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "confidence: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "aiPrediction",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiPrediction: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-production-log-js-production-logs",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "production_logs",
    "displayName": "Production Logs",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/ProductionLog.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "logId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "logId: { ... }"
      },
      {
        "name": "shift",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shift: { ... }"
      },
      {
        "name": "date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "zone",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone: { ... }"
      },
      {
        "name": "materialType",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materialType: { ... }"
      },
      {
        "name": "tonnageMined",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tonnageMined: { ... }"
      },
      {
        "name": "tonnageProcessed",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tonnageProcessed: { ... }"
      },
      {
        "name": "recoveryRate",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recoveryRate: { ... }"
      },
      {
        "name": "downtime",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "downtime: { ... }"
      },
      {
        "name": "operatorCount",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "operatorCount: { ... }"
      },
      {
        "name": "supervisor",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supervisor: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-safety-incident-js-safety-incidents",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "safety_incidents",
    "displayName": "Safety Incidents",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/SafetyIncident.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "incidentId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "incidentId: { ... }"
      },
      {
        "name": "type",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type: { ... }"
      },
      {
        "name": "severity",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "zone",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "reportedBy",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reportedBy: { ... }"
      },
      {
        "name": "date",
        "type": "DATE",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'open'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "injuriesCount",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "injuriesCount: { ... }"
      },
      {
        "name": "rootCause",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "rootCause: { ... }"
      },
      {
        "name": "correctiveAction",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "correctiveAction: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-user-js-users",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "users",
    "displayName": "Users",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/User.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "password",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "role",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'operator'",
        "sourceLine": "role: { ... }"
      }
    ]
  },
  {
    "id": "ai-mining-operations-optimizer-backend-src-models-workforce-record-js-workforce-records",
    "sourceProject": "AIMiningOperationsOptimizer",
    "name": "workforce_records",
    "displayName": "Workforce Records",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/WorkforceRecord.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "workerId",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "workerId: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "role",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "role: { ... }"
      },
      {
        "name": "department",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "department: { ... }"
      },
      {
        "name": "shift",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shift: { ... }"
      },
      {
        "name": "certification",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certification: { ... }"
      },
      {
        "name": "certExpiry",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "certExpiry: { ... }"
      },
      {
        "name": "yearsExperience",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "yearsExperience: { ... }"
      },
      {
        "name": "safetyScore",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "100",
        "sourceLine": "safetyScore: { ... }"
      },
      {
        "name": "hoursThisMonth",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "hoursThisMonth: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "aiAssessment",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAssessment: { ... }"
      }
    ]
  }
];
