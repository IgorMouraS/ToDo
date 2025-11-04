import type { VariantProps } from "class-variance-authority";

import { skeletonCva } from "./skeleton.cva";
import type { ComponentProps } from "react";

export interface SkeletonProps extends ComponentProps<"div">, VariantProps<typeof skeletonCva> { }