// Generic error reporting for React error boundaries.
// This module used to report to Lovable telemetry; those hooks have been removed.
// The function signature is preserved for backward compatibility with existing error boundaries.

export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  
  // Log the error to console for debugging
  console.error("Error caught by boundary:", {
    error: describeThrown(error),
    context: {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
  });
  
  // Lovable telemetry hooks (__lovableEvents, __lovableReportRuntimeError) removed.
  // Add your own error reporting service here (e.g., Sentry, LogRocket) if needed.
}

const MAX_SERIALIZED_LENGTH = 2000;

// Loaders and server fns throw raw Responses and plain objects (a Supabase
// `{ message, code, details }`), which String() reduces to "[object ...]".
function describeThrown(error: unknown): string {
  if (error instanceof Response) {
    return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  }
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  const { message } = (error ?? {}) as { message?: unknown };
  if (typeof message === "string" && message.length > 0) return message;
  try {
    return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
  } catch {
    return String(error);
  }
}
