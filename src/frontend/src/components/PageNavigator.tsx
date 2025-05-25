import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";

const PageNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location.pathname
    .split("/")
    .filter(Boolean);

  if (pathSegments.length === 0) return null;

  const buildPath = (index: number) =>
    "/" + pathSegments.slice(0, index + 1).join("/");

  const breadcrumbStyle = {
    padding: "6px 12px",
    color: "#6b7280", // Tailwind gray-500
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "0.875rem", // 14px
    userSelect: "none" as const,
  };

  const buttonStyle = {
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
    fontSize: "inherit",
    color: "inherit",
    textTransform: "capitalize" as const,
  };

  return (
    <Breadcrumb style={breadcrumbStyle}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <button
            onClick={() => navigate("/")}
            style={buttonStyle}
          >
            Home
          </button>
        </BreadcrumbItem>

        {pathSegments.map((segment, idx) => (
          <React.Fragment key={idx}>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <button
                onClick={() => navigate(buildPath(idx))}
                style={buttonStyle}
              >
                {segment.replace(/-/g, " ")}
              </button>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default PageNavigator;
