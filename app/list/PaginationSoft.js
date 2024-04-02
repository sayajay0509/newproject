import React from "react";
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";

function PaginationSoft({ pages, props }) {
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/list/${Number(props.params.id) - 1}`} />
          </PaginationItem>
          {pages.map((a, i) => {
            return (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`/list/${i + 1}`}
                  isActive={Number(props.params.id) === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`/list/${Number(props.params.id) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationSoft;
